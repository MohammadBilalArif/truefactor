# encoding: utf-8
require 'rubygems'

require 'sinatra'
require 'openssl'
require 'securerandom'
require 'net/http'
require 'open-uri'
require 'securerandom'


if ENV['STATIC']
  set :public_folder, 'public'
  get '/' do
    File.open('public/index.html').read
  end
end

disable :sessions
#disable :protection,except: :path_traversal


def gen()
  SecureRandom.base64(20).gsub(/[^a-zA-Z0-9]/,'')[0,8]
end

def getID(key)
  sha256(key.gsub(/\s/,'')).to_i(16).to_s[-24,24]
end


def sha256(m)
  OpenSSL::Digest::SHA256.hexdigest m
end

post "/vaults/:token" do
  token = params[:token].to_s.gsub(/[^a-zA-Z0-9]/,'')
  path = 'vaults/'+token

  if !File.exists? path or params[:delete]
    File.open(path,'w+') 
    File.open(path+"_messages",'w+') 
  end

  file = File.open(path,'r+')
  if params[:delete]
    File.delete(path)
    'deleted'
  elsif params[:vault]
    file.write(params[:vault].to_s)
    file.close()

    if params[:public_key]

      id = getID params[:public_key]
      puts "creating #{id}"
      File.write("vaults/#{id}", token+":"+params[:public_key]) unless File.exists?("vaults/#{id}")
    end
    puts 'found'
    'OK'
  else
    puts 'reading'
    File.open(path).read
  end
end


get "/public_keys/:token" do
  token = params[:token].to_s.gsub(/[^0-9]/,'')
  path = 'vaults/'+token

  if File.exists? path
    File.open(path).read.split(':',2)[1]
  else
    ""
  end
end

post "/messages" do
  receiver = params[:receiver].to_s.gsub(/[^0-9]/,'')

  path = 'vaults/'+receiver
  token = File.open(path).read.split(':',2)[0]

  puts "got token #{token}"
  mes = 'vaults/'+token+"_messages"
  File.open(mes,"a"){|f| f.write(params[:message]+"\n") }
  'OK'

end

get "/messages" do

  token = params[:token].to_s.gsub(/[^a-zA-Z0-9]/,'')
  f = File.open('vaults/'+token+"_messages","r")
  resp = f.read
  File.open('vaults/'+token+"_messages","w+")
  resp

end


get '/aa.appcache' do
  pages = %w{
/
/css/fonts.css
/css/layout.css
/css/extra.css
/js/jquery-2.1.4.js
/js/aes.js
/js/visibility.js
/js/forge.bundle.js
/forge/jsbn.js
/js/scrypt.js
/js/application.js
/js/main.js
/img/icon_drawer.svg
/img/icon_truefactor.svg
/box.gif
/img/icon_add_app.svg
/img/icon_go_back.svg
/img/text_truefactor.svg
/img/icon_approve.svg
/img/icon_deny.svg

https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css
https://fonts.googleapis.com/css?family=Open+Sans:400,600,300
https://fonts.gstatic.com/s/opensans/v13/cJZKeOuBrn4kERxqtaUH3ZBw1xU1rKptJj_0jans920.woff2
https://fonts.gstatic.com/s/opensans/v13/DXI1ORHCpsQm3Vp6mXoaTRampu5_7CjHW5spxoeN3Vs.woff2
https://fonts.gstatic.com/s/opensans/v13/MTP_ySUJH_bn48VBG8sNShampu5_7CjHW5spxoeN3Vs.woff2
}

  version = Time.now.to_i / 5
  
  #response.headers['cache-control'] = 'max-age=3155760000'
  response.headers['content-type'] = 'text/cache-manifest; charset=UTF-8'
"CACHE MANIFEST
#v#{version}
#{pages.join("\n")}

NETWORK:
*

FALLBACK:
/
"
end



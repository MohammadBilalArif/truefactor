# encoding: utf-8
require 'sinatra'
require 'rubygems'
require 'openssl'
require 'securerandom'
require 'net/http'
require 'open-uri'
require 'securerandom'
require 'rdiscount'



set :public_folder, 'public'


disable :sessions
#disable :protection,except: :path_traversal

def read(file)
  File.open('vaults/'+file)
end

class Vault


  def initialize(token)
    @token = token.to_s.gsub(/[^a-zA-Z0-9]/,'')
  end

  def exists?


  end

  def file
    File.open("vaults/#{@token}/")

  end

end


def gen()
  SecureRandom.base64(20).gsub(/[^a-zA-Z0-9]/,'')[0,8]
end

post "/vaults/:sync_token" do
  @vault = Vault.new(params[:sync_token])

  if @vault
    @vault = Vault.create(encrypted_vault: params[:encrypted_vault].to_s, sync_token: gen)
    render json: {sync_token: @vault.sync_token}
  else
    @vault = Vault.find_by(sync_token: token)
    if @vault
      @vault.encrypted_vault = params[:encrypted_vault].to_s
      @vault.save
      render json: {success: true}
    else
      not_found
    end
  end
end


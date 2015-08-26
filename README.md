# Introdution to Truefactor

## The Problem

In the real world humans use eyes and ears to observe different details in other humans to authenticate who is who. It includes face, voice, body type, shared memories etc. All these things are very hard to fake simultaneously, it won't look natural enough. 

<img src="/faces.jpg">

But in digital world, we have nothing to observe about the person sitting on the other end of the wire. It's all input and output streams of bits. That's why we invented shared secrets, stored in our memory - passwords. Biometrics does work  with physical security devices, but doesn't make sense in the digital world.

In digital world we log in hundreds and thousands remote applications (websites). Unfortunatelly, once your password is leaked, it can be reused by a 3rd party. That's why it is essential to use both unique and complex password for every website.

By the way passwords like MasterPassgoogle.com MasterPasstwitter.com are better but still count as a reuse - a sophisticated attacker will easily recover this pattern from the plain text dump.

I just counted passwords I currently use. Four 8 letters long, four about 18 and two about 30 letters, 10 passwords in total. But there are hundreds of apps. I bet most people can't remember that many complex and unique passwords. But every single website wants you to do it, and never mentions that "password managers" even exist (hence < 1% market penetration rate).

Which means 99% of people reuse passwords. They have no other choice. They are vulnerable by design, and one day a leaked password will compromise their other accounts. The system makes no single attempt to help them. Yet another website does not care if you reuse your passwords, they think it is your problem and responsability.

"Just use a password manager". It's like letting people drive not explaining them what traffic lights are. When they get pwned: "Should have read about traffic lights somewhere. Your problem.". 

Anyway, a password manager is an ugly "monkey patch" - it injects Javascript code into every website that finds `<input type=password>` and autofills it.

## The Solution

<img src="/truefactor.png">

Now, when it is crystal clear this design is so badly flawed, and must die as soon as possible, let's try to find a solution.

It should not involve any kind of special hardware: 

1) Hardware is expensive. Not for me and you, of course, but there are 6+ billion people on this planet, and our goal is to help them all. U2F stick for $19 is a joke.

2) Hardware is easy to lose and impossible to backup. "Backup codes" you were supposed to write down is also a joke and user experience nightmare.

3) Most important one: hardware without a display and buttons cannot be used for out-of-band transaction verification. Ones with display (like Trezor) start at $119. Lots of Android phones (which can also be used for everyday tasks) are cheaper than that. 

This is why U2F is by no means a solution to The Problem, albeit <a href="https://www.assembla.com/spaces/cryptostick/wiki">Crypto Sticks for PGP conversations</a> are generally useful when 1 press is access to 1 email, not access to everything in your account.

It must be end-2-end and not rely on any central authority. <a href="http://www.oauthsecurity.com/">This is why OAuth is a horrible idea for authentication</a>. 

Did you know that all 2FA services (except manual Google Authenticator, of course) such as Authy or Duo are not end-2-end, and that's why you still need to have 1st factor?

Did you know that your 1st factor is also kind of broken because Gmail and other email providers can reset passwords and log into literally 99% of your accounts? 

In Truefactor, there's no central authority, no one can log in your account, even backup servers are optional and you can deploy your own.

## User experience

Imagine this: I lost all my devices so I buy a new laptop and a smartphone. When I open my laptop it is empty. How do I get my passwords, private keys, Bitcoin wallets and everything else back?

With Truefactor, all you need is email and password. "MyPassword:MyIdentifier" is used to derive your master private and public keys (MyPriv/MyPub). Truefactor application sends requests (signed with MyPriv) to distributed Truefactor servers `https://truefactor.io/getvault?public_key=MyPub&signature=SIG`. They respond with encrypted bundle that can be decrypted with MyPriv.

Only the person who knows both MyPassword and MyIdentity can derive the master key to download and decrypt the bundle. 

The bundle can be copied to a USB stick or cloud services like Dropbox, but it's a bad idea since Dropbox knows your salt (email) which makes bruteforce more feasible. Truefactor servers do their best to stop bruteforce attacks with IP banning and hashcash. This is why brainwallet-ing your bundle with such server is better than storing it in a public blockchain - the server can rate limit.

The server only stores your public key with corresponding bundle. Even if all bundles are leaked it is not a big deal: attackers would have to brute 1 000 000 (top passwords) for 3 000 000 000 different salts (emails, if they have it), for few seconds each (key derivation complexity).


## Truefactor is a blend of following ideas:

1) <a href="https://keybase.io/warp/warp_1.0.6_SHA256_e68d4587b0e2ec34a7b554fbd1ed2d0fedfaeacf3e47fbb6c5403e252348cbfc.html">WarpWallet</a>. While I'm strongly against any kind of brainwallet, using email as a salt is a great idea, and drastically slows down bruteforce attempts. Bruting "datsmypassword:homakov@gmail.com" is N times harder than "datsmypassword", N is number of emails you have to try (<a href="http://www.internetlivestats.com/internet-users/">at least 3 billion</a>)

2) Passwords managers. Bundles are encrypted with MyPriv, there's nothing new here. But unlike password managers that require you to store the bundle "somewhere else", like Dropbox, which makes you remember another password, Truefactor backup process is seamless, anonymouse (aka Zero Knowledge) and painless. Dropbox/USB stick is an option though. Specs of Truefactor-compatible backup server are coming soon. Hopefully some big companies like Google who showed interest in killing passwords will deploy it on their servers.

3) TOTP. It adds timeness to prevent replay attacks. Truefactor supports both expire_at and timestamp based signatures (for offline codes). Might support counter-based timeness in the future, yet I believe everyone should sync their clock.

4) Transparent 2FA and transaction verification. An application can ask Truefactor app to sign strings like "Send 1 BTC to 1Addr" or verify if "Your deposit address is 1Addr" is a valid response. Also known as <a href="https://en.wikipedia.org/wiki/Mutual_authentication">mutual authentication</a>. It helps against XSS and local man-in-the-browser attacks. You can also pair your laptop Truefactor with mobile one, and it will save you ifone of your devices gets compromised.




## Make people use good master passwords


1) gradually make it complex, remind them to set a better password when they use truefactor app long enough, e.g. have at least 5 connected applications

2) help them to create one?, e.g. "look around yourself", "what was your last dream" etc. 


## Interactions with truefactor app

1) window.open and postMessage

2) QR code

3) Open desktop app with truefactor:// scheme

4) Types of response: password (static secret in plain text) and verifier (time-based signature)

5) Push requests to Truefactor server using routing truefactor_id?

## Milestones

September 2015 - Minimal Viable Product

January 2016 - release

## APIs and integrations

Must take not more than 5 minutes to integrate in any existing application. Ruby (devise ext), python, php (wordpress ext).

## Want to help?

This is open source and non-profit project. If you care about authentication and want to join, drop me a line homakov@gmail.com I'm a security guy, so all kinds of programmers, designers and UX experts are welcome.






---
title: Notes about the 1Password recovery codes
date: 2026-06-22 20:00:00 -0700
tags: software thoughts
image:
  path: "https://static.febog.com/blog-20260622-cover.png"
  width: 1200
  height: 630
  alt: Notes about the 1Password recovery codes published June 22nd, 2026 by febog.
---
I've been a very happy 1Password user for many years, and when I learned about the new (to me) Recovery Codes feature I was hesitant at first. But after reading more about the topic I think they are great.

After reading more about the topic I wanted to put together a list of resources that I read when I was investigating more the subject.

## Security

I really like the approach 1Password has with their [Secret Key](https://support.1password.com/secret-key-security/) implementation. Since they never store this piece of information on their server, a brute-force attack to their servers or after a breach won't be able to decrypt the data.

> Someone who attempts a brute-force attack on our servers won’t be able to decrypt your data without your Secret Key, which we never have.

So I didn't want to interfere with that model when enabling recovery codes. Fortunately, even with this feature enabled, the Secret Key remains in place and functioning as always. It's completely independent.

I loved the attention to detail given to the design of using a recovery code to be as secure as the usual password and Secret Key flow, [as described in their announcement blog post](https://1password.com/blog/introducing-1password-recovery-codes).

> The Secret Key is not going away – remember, you’ll use a recovery code only if you’ve forgotten your account password and/or lost your Secret Key. If you’ve used a recovery code to get back into your 1Password account, you’ll be asked to create a new account password and will receive a new Emergency Kit with a new Secret Key. You’ll use that new Secret Key to log in to your 1Password account on additional devices.

The implementation of recovery codes doesn't change the security model around the Secret Key and the end-to-end encryption nature of the data in 1Password. While also being friendly to the user experience: [it's just a few clicks in the interface to create a recovery code or rotate it](https://support.1password.com/recovery-codes/).

## Alternative to the Emergency Kit

One of the things that I liked the most is this part from their [article about the security of recovery codes](https://support.1password.com/recovery-code-security/):

> When we designed recovery codes, we prioritized access for the user who has the ability to sign in to the account with their credentials rather than someone using only the recovery code. This intentional decision makes it difficult for a recovery code to be used as an account-takeover tool.

The article also mentions:

> A recovery code is a great alternative to your Emergency Kit, because it alone can’t be used to access your 1Password account — you still have to verify your identity.

This is very useful when deciding how and where you keep recovery methods to your account.

## Attention to detail

In summary, I really liked the thought and attention to detail put into the user experience and technical considerations when designing this feature.

## References

- [Introducing recovery codes: Never lose access to 1Password](https://1password.com/blog/introducing-1password-recovery-codes) (June 20th, 2024).
- [About the security of recovery codes in 1Password](https://support.1password.com/recovery-code-security/).
- [Generate and use recovery codes](https://support.1password.com/recovery-codes/)
- [Secret Key security](https://support.1password.com/secret-key-security/).

## Further reading

- [Secure Remote Password (SRP): How 1Password uses it](https://1password.com/blog/developers-how-we-use-srp-and-you-can-too) (February 14th, 2018).
- [About the 1Password security model](https://support.1password.com/1password-security/).
- [1Password Security Design White Paper](https://agilebits.github.io/security-design/).

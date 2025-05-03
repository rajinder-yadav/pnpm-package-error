# Generate a self-sign SSL Certificate

To use SSL to sign the JWT token and verify it, you will need to generate the keys.

Create a Asymmetric SSL Key based on SHA256 Algorithmn, this will create:

1. Certificate
1. Private key

The fields, specified in "**-subj**" line are listed below:

- C= - Country name. The two-letter ISO abbreviation.
- ST= - State or Province name.
- L= - Locality Name. The name of the city where you are located.
- O= - The full name of your organization.
- OU= - Organizational Unit.
- CN= - The fully qualified domain name.

```sh
openssl req -newkey rsa:4096 \
            -x509 \
            -sha256 \
            -days 3650 \
            -nodes \
            -out jwt.crt \
            -keyout jwt.key \
            -subj "/C=CA/ST=ONT/L=Toronto/O=Test"
```

Extract Public key from generated Certificate.

```sh
openssl x509 -pubkey -noout -in jwt.crt
```

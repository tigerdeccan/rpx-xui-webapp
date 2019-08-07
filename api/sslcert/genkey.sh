# Create a file named 'server.pass.key' and place it in the same folder where the command is executed.
openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
 
# Use the 'server.pass.key' file that just generated and create 'server.key'.
openssl rsa -passin pass:x -in server.pass.key -out server.key
 
# We no longer need the 'server.pass.key'
rm server.pass.key


# Node.js Caesar cipher CLI tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## How to install

1. Download or clone this repository
2. Change directory to `"caesar-cipher-node.js"`
3. Install dependencies.

`npm i` or `npm install`

## How to use

Command string:

`node index [...options]`

P.S.: Look through the section below.

Options:

* `-s, --shift`: cipher shift. Positive or negative number.
* `-a, --action`: action. Use `encode` to encrypt text and `decode` to decrypt.
* `-i, --input`: input file. Use '/' as prefix to url (Optional).
* `-o, --output`: output file. Use '/' as prefix to url (Optional).

## Examples:

`$ node index --action encode --shift 42 --input /input-file.txt --output /output-file.txt`

`$ node index -a encode -s 42 -i input-file.txt -o output-file.txt`

`$ node index -a encode --shift 42 -o output-file.txt`

`$ node index -a decode --shift 42 -i input-file.txt`

`$ node index -a decode -s 42`

## Files

* `index.js` - Executable file.
* `modules/caesar-cipher.js` - Caesar cipher function.
* `modules/get-data.js` - Options creation and handling.
* `modules/pipeline-transform.js` - Pipeline creation and handling of  input/output options.
* `modules/transform.js` - Transform stream creation.
* `modules/utils.js` - Function for error custom generating

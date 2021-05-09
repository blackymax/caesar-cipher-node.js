const errorGenerator = (err) => {
    if (err) {
        process.stderr.write(err.message + '\n');
        process.exit(1);
    }
}

module.exports = { errorGenerator };
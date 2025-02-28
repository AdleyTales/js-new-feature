/**
 * error cause
 * 指出原始错误cause
 */

try {
    connectToDatabase();
} catch (err) {
    throw new Error('Connecting to database failed.', { cause: err });
}
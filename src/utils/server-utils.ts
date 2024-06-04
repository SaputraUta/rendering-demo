import "server-only";
export const serverSideFunction = () => {
    console.log(`
    use multiple libraries
    use env variables
    interact with database
    process confidental information
    `);
    return "Server result";
}
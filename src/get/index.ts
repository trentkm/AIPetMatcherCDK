/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/require-await */

async function main(event: any) {
    console.log('event is 👉', JSON.stringify(event, null, 2));
    return {
        body: JSON.stringify("🤠"),
        statusCode: 200,
    };
}

module.exports = {main};
const { Connection, PublicKey } = require('@solana/web3.js');

// Folosim RPC-ul public gratuit de la Solana pentru test
const RPC_ENDPOINT = 'https://api.mainnet-beta.solana.com';
const solanaConnection = new Connection(RPC_ENDPOINT, 'confirmed');

async function startBot() {
    console.log('Botul a pornit. Conectat la rețeaua Solana...');

    try {
        // Luăm cel mai recent slot (bloc) procesat pe rețea
        const slot = await solanaConnection.getSlot();
        console.log(`Slot curent pe Solana: ${slot}`);

// Verificăm sănătatea conexiunii interogând versiunea nodului
        const version = await solanaConnection.getVersion();
        console.log('Versiune nod Solana:', version);

} catch (error) {
        console.error('Eroare la conexiunea cu Solana:', error);
    }
}

startBot(); 

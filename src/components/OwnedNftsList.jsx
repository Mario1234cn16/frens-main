import React, { useMemo, useEffect } from 'react';
import * as solanaWeb3 from '@solana/web3.js';
function OwnedNftsList(){
    getOwnedNFTs();
    let ownedNftStr = sessionStorage.getItem("ownedNftList");
    let ownedNftList = ownedNftStr.split(",");
    console.log(getNFTDetails('2ix3ARKAD1LveKfRiZMxtV8p2VwjzYQe3edwoRhSU7Bb'));
    return(
        <div>
            <ul>
                {ownedNftList.map(function(d, idx){
                    return (<li key={idx}>{d}</li>)
                })}
            </ul>
      </div>
    );
}

async function getNFTDetails(mintAddress){
    function searchNonAlphanumeric(string, alphanumericArray) {
        for (let i = 0; i < string.length; i++) {
          const char = string[i];
          if (alphanumericArray.indexOf(char) === -1) {
            return i;
          }
        }
        return -1; // Return -1 if all characters are found in the array
    }
    const alphanumericArray = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789/.:-'];
    const connection = new solanaWeb3.Connection('https://solana-mainnet.g.alchemy.com/v2/-Z3YvzeM0tpHH2xFyeUqPympyqRIFEQL');
    const mintPublicKey = new solanaWeb3.PublicKey(mintAddress);
    const metadataProgramId = new solanaWeb3.PublicKey(
        'metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s'
      );
    const metadataAddress = await solanaWeb3.PublicKey.findProgramAddress(
        ['metadata', metadataProgramId.toBuffer(), mintPublicKey.toBuffer()],
        metadataProgramId
      );
      const metadataAccount = await connection.getAccountInfo(metadataAddress[0]);
      let metadata = new TextDecoder().decode(new Uint8Array(metadataAccount.data));
      metadata = metadata.slice(metadata.indexOf("https://"));
      const nonAlphanumericIndex = searchNonAlphanumeric(metadata, alphanumericArray);
      const metadatalink = metadata.slice(0 , nonAlphanumericIndex);
      return metadatalink;
}


async function getOwnedNFTs() {
    const publicKeyStr = localStorage.getItem("publicKey");
    const publicKey = new solanaWeb3.PublicKey(publicKeyStr);
    const connection = new solanaWeb3.Connection('https://solana-mainnet.g.alchemy.com/v2/-Z3YvzeM0tpHH2xFyeUqPympyqRIFEQL');
    const ownedTokens = await connection.getParsedTokenAccountsByOwner(publicKey,{programId: new solanaWeb3.PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")});
    const ownedNFTs = ownedTokens.value.map((token) => token.account.data.parsed.info.mint);
    sessionStorage.setItem("ownedNftList", ownedNFTs);
  }

export default OwnedNftsList;
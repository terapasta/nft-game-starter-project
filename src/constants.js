const CONTRACT_ADDRESS = "0x5872d6dB954fa7892CBd7Ee52751d4F87C84b7A7";

// NFTキャラクターの属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
  return {
    name: characterData.name,
    imageURI: characterData.imageURI,
    hp: characterData.hp.toNumber(),
    maxHp: characterData.maxHp.toNumber(),
    attackDamage: characterData.attackDamage.toNumber(),
  };
};


export { CONTRACT_ADDRESS, transformCharacterData };

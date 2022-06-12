const CONTRACT_ADDRESS = "0x84d75E559A728EA40588361A386fbC0eE4A682EE";

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

class Sprite{
    constructor(title, id, name, image, type){
        this.title = title;
        this.id = id;
        this.name = name;
        this.image = image;
        this.type = type;
    }
}

var sprites = [
    new Sprite('Burst', 0, 'Burst', 'img/sprites/Burst.png', 'SpellSpeed'),
    new Sprite('Barrier', 1, 'Barrier', 'img/sprites/Barrier.png', 'Keyword'),
    new Sprite('Imbue', 2, 'Imbue', 'img/sprites/Imbue.png', 'Card Effect'),
    new Sprite('Scout', 3, 'Scout', 'img/sprites/Scout.png', 'Keyword'),
    new Sprite('Augment', 4, 'Augment', 'img/sprites/Augment.png', 'Keyword'),
    new Sprite('Attach', 5, 'Attach', 'img/sprites/Attach.png', 'Keyword'),
    new Sprite('Level Up: Full', 6, 'ChampLevelUpIcon3', 'img/sprites/ChampLevelUpIcon3.png', 'Levelup'),    
    new Sprite('Aura', 7, 'Aura', 'img/sprites/Aura.png', 'Keyword'),
    new Sprite('Generic Trigger', 8, 'GenericTrigger', 'img/sprites/GenericTrigger.png', 'Card Effect'),
    new Sprite('Regeneration', 9, 'Regeneration', 'img/sprites/Regeneration.png', 'Keyword'),
    new Sprite('Spell Shield', 10, 'SpellShield', 'img/sprites/SpellShield.png', 'Keyword'),
    new Sprite('Fated', 11, 'Fated', 'img/sprites/Fated.png', 'Keyword'),
    new Sprite('Formidable', 12, 'Formidable', 'img/sprites/Formidable.png', 'Keyword'),
    new Sprite('Stardust', 13, 'Stardust', 'img/sprites/Stardust.png', 'Currency'),
    new Sprite('Level Up: Half', 14, 'ChampLevelUpIcon2', 'img/sprites/ChampLevelUpIcon2.png', 'Levelup'),
    new Sprite('Attune', 15, 'Attune', 'img/sprites/Attune.png', 'Keyword'),
    new Sprite('Frostbite', 16, 'Frostbite', 'img/sprites/Frostbite.png', 'Keyword'),
    new Sprite('Can\'t Block', 17, 'Reckless', 'img/sprites/Reckless.png', 'Keyword'),
    new Sprite('Fury', 18, 'Fury', 'img/sprites/Fury.png', 'Keyword'),
    new Sprite('Lurker', 19, 'Lurker', 'img/sprites/Lurker.png', 'Keyword'),
    new Sprite('Impact', 20, 'Impact', 'img/sprites/Impact.png', 'Keyword'),
    new Sprite('Impact: Empty', 21, 'ImpactB', 'img/sprites/ImpactB.png', 'Keyword'),
    new Sprite('Level Up: Empty', 22, 'ChampLevelUpIcon1', 'img/sprites/ChampLevelUpIcon1.png', 'Levelup'),
    new Sprite('Champion Wildcard', 23, 'champion', 'img/sprites/champion.png', 'Wildcard'),
    new Sprite('Fleeting', 24, 'Fleeting', 'img/sprites/Fleeting.png', 'Keyword'),
    new Sprite('Quick Attack', 25, 'QuickStrike', 'img/sprites/QuickStrike.png', 'Keyword'),
    new Sprite('Silenced', 26, 'Silenced', 'img/sprites/Silenced.png', 'Keyword'),
    new Sprite('Stunned', 27, 'Stunned', 'img/sprites/Stunned.png', 'Keyword'),
    new Sprite('Tough', 28, 'Tough', 'img/sprites/Tough.png', 'Keyword'),
    new Sprite('Vulnerable', 20, 'Vulnerable', 'img/sprites/Vulnerable.png', 'Keyword'),
    new Sprite('Bandle City', 30, 'BandleCity', 'img/sprites/BandleCity.png', 'Region'),
    new Sprite('Epic Wildcard', 31, 'epic', 'img/sprites/epic.png', 'Wildcard'),
    new Sprite('Fearsome', 32, 'Fearsome', 'img/sprites/Fearsome.png', 'Keyword'),
    new Sprite('Immobile', 33, 'Immobile', 'img/sprites/Immobile.png', 'Keyword'),
    new Sprite('Last Breath', 34, 'LastBreath', 'img/sprites/LastBreath.png', 'Keyword'),
    new Sprite('Lifesteal', 35, 'Lifesteal', 'img/sprites/Lifesteal.png', 'Keyword'),
    new Sprite('Overwhelm', 36, 'Overwhelm', 'img/sprites/Overwhelm.png', 'Keyword'),
    new Sprite('Skill Mark (Regular)', 37, 'SkillMark', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Skill Mark (Small)', 38, '', 'img/sprites/SkillMark.png', 'Card Effect'),
    new Sprite('Shurima', 39, 'Shurima', 'img/sprites/Shurima.png', 'Region'),
    new Sprite('Rare Wildcard', 40, 'rare', 'img/sprites/rare.png', 'Wildcard'),
    new Sprite('Capture', 41, 'Capture', 'img/sprites/Capture.png', 'Keyword'),
    new Sprite('Challenger', 42, 'Challenger', 'img/sprites/Challenger.png', 'Keyword'),
    new Sprite('Deep', 43, 'Deep', 'img/sprites/Deep.png', 'Keyword'),
    new Sprite('Double Attack', 44, 'DoubleStrike', 'img/sprites/DoubleStrike.png', 'Keyword'),
    new Sprite('Elusive', 45, 'Elusive', 'img/sprites/Elusive.png', 'Keyword'),
    new Sprite('Ephemeral', 46, 'Ephemeral', 'img/sprites/Ephemeral.png', 'Keyword'),
    new Sprite('Targon', 47, 'Targon', 'img/sprites/Targon.png', 'Region'),
    new Sprite('Fast', 48, 'Fast', 'img/sprites/Fast.png', 'Type'),
    new Sprite('Slow', 49, 'Slow', 'img/sprites/Slow.png', 'Type'),
    new Sprite('Focus', 50, 'Focus', 'img/sprites/Focus.png', 'Type'),  
    new Sprite('Landmark', 51, 'LandmarkVisualOnly', 'img/sprites/LandmarkVisualOnly.png', 'Type'),
    new Sprite('Coin', 52, 'currency_bp', 'img/sprites/currency_bp.png', 'Currency'),
    new Sprite('Shards', 53, 'currency_shards', 'img/sprites/currency_shards.png', 'Currency'),
    new Sprite('Common Wildcard', 54, 'common', 'img/sprites/common.png', 'Wildcard'),
    new Sprite('Neutral', 55, 'Neutral', 'img/sprites/Neutral.png', 'Region'),
    new Sprite('Bilgewater', 56, 'Bilgewater', 'img/sprites/Bilgewater.png', 'Region'),
    new Sprite('Demacia', 57, 'Demacia', 'img/sprites/Demacia.png', 'Region'),
    new Sprite('Freljord', 58, 'Freljord', 'img/sprites/Freljord.png', 'Region'),
    new Sprite('Ionia', 59, 'Ionia', 'img/sprites/Ionia.png', 'Region'),
    new Sprite('Noxus', 60, 'Noxus', 'img/sprites/Noxus.png', 'Region'),
    new Sprite('Piltover & Zaun', 61, 'PiltoverZaun', 'img/sprites/PiltoverZaun.png', 'Region'),
    new Sprite('Shadow Isles', 62, 'ShadowIsles', 'img/sprites/ShadowIsles.png', 'Region'),
    
    // Different spritesheets, which can not be adressed by ID.
    // 6A
    new Sprite('Jhin', '', 'Jhin', 'img/sprites/Jhin.png', 'Region'),
    new Sprite('Bard', '', 'Bard', 'img/sprites/Bard.png', 'Region'),
    new Sprite('Runeterra', '', 'Runeterra', 'img/sprites/Runeterra.png', 'Region'),
    new Sprite('Invalid Deck', '', 'InvalidDeck', 'img/sprites/InvalidDeck.png', 'Info'),
    
    // 6B
    new Sprite('Hallowed', '', 'Hallowed', 'img/sprites/Hallowed.png', 'Keyword'),
    new Sprite('Evolve', '', 'Evolve', 'img/sprites/Evolve.png', 'Keyword'),
    new Sprite('Evelynn', '', 'Evelynn', 'img/sprites/Evelynn.png', 'Region'),
    
    // 6C
    new Sprite('Jax', '', 'Jax', 'img/sprites/Jax.png', 'Region'),
    new Sprite('Kayn', '', 'Kayn', 'img/sprites/Kayn.png', 'Region'),
    new Sprite('Equipment', '', 'Equipment', 'img/sprites/Equipment.png', 'Type'),
    
    // 6D
    new Sprite('Varus', '', 'Varus', 'img/sprites/Varus.png', 'Region'),
    
    // 6E
    new Sprite('Aatrox', '', 'Aatrox', 'img/sprites/Aatrox.png', 'Region'),
    new Sprite('Ryze', '', 'Ryze', 'img/sprites/Ryze.png', 'Region'),
    
    // 7A
    new Sprite('Brash', '', 'Brash', 'img/sprites/Brash.png', 'Keyword'),
    
    // 7B
    new Sprite('Poro King', '', 'PoroKing', 'img/sprites/PoroKing.png', 'Region'),
    new Sprite('Neeko', '', 'Neeko', 'img/sprites/Neeko.png', 'Region'),
    
    // 8A
    new Sprite('Elemental Skill', '', 'ElementalSkill', 'img/sprites/ElementalSkill.png', 'Card Effect')
    
];

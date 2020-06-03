//  помогает структурировать, когда много однотипных сущностей
enum Membership {
    Simple,
    Standart,
    Premium
}
const memberShip = Membership.Standart
const membReverse = Membership[2]

enum SocialMedia {
    vk = 'VK',
    fb = 'FB'
}
SocialMedia[2]
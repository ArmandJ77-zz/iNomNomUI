export default class AvatarGenerator {
    constructor() {
        this.maleAvatars = [
            require('./../assets/boy1.png'),
            require('./../assets/boy2.png'),
            require('./../assets/boy3.png'),
        ];
        this.femaleAvatars = [
            require('./../assets/girl1.png'),
            require('./../assets/girl2.png'),
            require('./../assets/girl3.png')
        ];
    }

    Produce(gender) {
        debugger;
        if(gender == null)
            return require('./../assets/anonymous.png');
            
        switch (gender.toLowerCase()) {
            case 'm':
                return this.maleAvatars[Math.floor(Math.random() * this.maleAvatars.length)];
            case 'f':
                return this.femaleAvatars[Math.floor(Math.random() * this.femaleAvatars.length)];
            default:
                return require('./../assets/anonymous.png');
        }
    }
}
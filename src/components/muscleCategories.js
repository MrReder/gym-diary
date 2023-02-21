//I should import imgs here today
import backImg from '../assets/back.svg';
import bicepsImg from '../assets/biceps.svg';
import chestImg from '../assets/chest.svg';
import legsAndGlutesImg from '../assets/legsAndGlutes.svg';
import shouldersImg from '../assets/shoulders.svg';
import tricepsImg from '../assets/triceps.svg';

export const muscleCategories = [
    {
        id: 1,
        catName: 'Back',
        imgUrl: backImg,
        link: '/muscle-groups/back/'
    },
    {
        id: 2,
        catName: 'Biceps',
        imgUrl: bicepsImg,
        link: '/muscle-groups/biceps/'
    },
    {
        id: 3,
        catName: 'Chest',
        imgUrl: chestImg,
        link: '/muscle-groups/chest/'
    },
    {
        id: 4,
        catName: 'Delts',
        imgUrl: shouldersImg,
        link: '/muscle-groups/delts/'
    },
    {
        id: 5,
        catName: 'Legs & Glutes',
        imgUrl: legsAndGlutesImg,
        link: '/muscle-groups/legs-and-glutes/'
    },
    {
        id: 6,
        catName: 'Triceps',
        imgUrl: tricepsImg,
        link: '/muscle-groups/triceps/'
    }
]
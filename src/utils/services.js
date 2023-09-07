import service1 from '../assets/img/service-1.jpg';
import service2 from '../assets/img/service-2.jpg';
import service3 from '../assets/img/service-3.jpg';
import service4 from '../assets/img/service-4.jpg';

const services = [
    {
        img: service1,
        alt: 'Conversation',
        circle1: 'circle circle-1',
        circle2: 'circle circle-2',
        title: 'Step 1: Initial conversation and presentation of the vision',
        description:
            'At this stage, we discuss your expectations, preferences and vision regarding the interior you want to create. I will find out exactly what your needs, lifestyle and aesthetic preferences are. This will give me a better understanding of how I can customize the design for you.'
    },
    {
        img: service2,
        alt: 'Analyze',
        circle1: 'circle circle-3',
        circle2: '',
        title: 'Step 2: Space analysis and design proposal',
        description:
            'After gathering information from the first conversation, he proceeds to analyze the space with which I will be working. He develops a preliminary design proposal for you, taking into account all elements. At this stage, I present initial ideas so that we can refine the concept together and adapt it to your expectations.'
    },
    {
        img: service3,
        alt: 'Quotation',
        circle1: '',
        circle2: 'circle circle-4',
        title: 'Step 3: Detailed quote',
        description:
            'After better understanding your preferences, he proceeds to prepare the project valuation. It takes into account the estimated costs and the duration of the project. We also provide you with a work schedule so that you know when you can expect the individual stages of the project.'
    },
    {
        img: service4,
        alt: 'Signing a contract',
        circle1: 'circle circle-5',
        circle2: 'circle circle-6',
        title: 'Step 4: Signing the contract and starting work',
        description:
            'When the valuation is accepted, we move on to signing the contract. After signing the contract, I start working on your project. You will be kept informed about the progress and you will have the opportunity to make any comments or changes.'
    }
];

export default services;

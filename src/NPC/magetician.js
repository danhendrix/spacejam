import NPC, { RequirementTypes } from './npc';
import hardMath from '../Questions/hardMath';

const Magetician = new NPC(
    'Magetician',
    'magetician',
    '../assets/npc/magetician.png',
    [
        {
            type: RequirementTypes.dialog,
            message:
                "I see you have all three Report Cards. Impressive... But be warned, all others who have tried to prove their knowledge against me, The Magetician, have failed. If that does not multiply your fear, speak to me again only when you are truly ready to see if you are Acadamia's so called champion of knowledge.",
        },
        ...hardMath.generateQuestions(5, {
            fn() {
                this.props.endGame();
            },
            functionType: 'grid',
            message: '',
        }),
    ]
);

export default Magetician;

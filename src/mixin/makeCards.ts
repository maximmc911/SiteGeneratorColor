import GeneratorColorContent from '../page/MainPage/components/content/GeneratorColorContent'
import GeneratorLinearGradientContent from '../page/MainPage/components/content/GeneratorLinearGradientContent'
import GeneratorLinearRadialContent from '../page/MainPage/components/content/GeneratorRadialGradientContent'
import { RandomGenerator } from './mixin'
export interface cardObj{
    id: number,
    component:  React.FC<{}> ,
    function : ()=> string,
    nameCard: string,
    nameBtn: string
}
export const randomGeneratorCards : Array<cardObj> = [
{
    id: 1,
    component: GeneratorColorContent,
    function: RandomGenerator,
    nameCard: "Генератор случайных цветов",
    nameBtn: "сгенерировать цвет"
},
{
    id: 2,
    component: GeneratorLinearGradientContent,
    function: ()=> `linear-gradient(45deg, ${RandomGenerator()}, ${RandomGenerator()} , ${RandomGenerator()})`,
    nameCard: "Генератор линейных градиентов",
    nameBtn: "сгенерировать линейный градиент"
},
{
    id: 3,
    component: GeneratorLinearRadialContent,
    function: ()=> `radial-gradient(${RandomGenerator()}, ${RandomGenerator()},  ${RandomGenerator()}`,
    nameCard: "Генератор радиальных градиентов",
    nameBtn: "сгенерировать радиальный градиент"
},
]
import {  NavLink, Route } from 'react-router';
import image from '../../public/logo/photo_2025-02-22_20-09-27.jpg'
import ColorRandomPage from '../pages/colorRandom/ColorRandomPage';
import GradientPage from '../pages/gradientColor/GradientPage';
import  MainPage  from '../pages/main/MainPage';

interface objPages {
    id: number,
    name: string | React.FC<{}> ,
    href: string ,
    component : React.FC<{}>

}
  
  const ImageComponent: React.FC<{}> = () => {
    return <img src={image} alt='logo' style={{width:`50px`, borderRadius:`50%`}} />;
  };

const MakePages: Array<objPages> =[
    {
        id:1,
        name: 'генератор цвета' ,
        href: `/randomGeneratorColor`,
        component: ColorRandomPage ,
    },
    {
        id:2,
        name: ImageComponent ,
        href: `/`,
        component: MainPage ,
    },
    {
        id:3,
        name: 'генератор градиентов' ,
        href: `/randomGeneratorGradient`,
        component: GradientPage ,
    },
]

export const MakeItemNavbar = () =>{
    return MakePages.map((el)=>(
        <NavLink to={el.href} key={el.id}>
            {typeof( el.name) === 'string' ? el.name : <el.name />}
        </NavLink>
       
    ))
}

export const MakeRouting = () =>{
    return MakePages.map((el)=>(
        <Route element={<el.component />} path={el.href} key={el.id}/>
    ))
}
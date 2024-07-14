import React from 'react'
import { useGLTF } from '@react-three/drei/native'

export default function Cube(props) {
    const { nodes, materials } = useGLTF(require('./brain_cube.glb'))
    return (
        <>

            <group onClick={() => props.handleIsActive()} {...props} {...props} dispose={null} scale={0.5}>

                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube.geometry}
                    material={materials.Black}

                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube001_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube001_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube001_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube001_4.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube002_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube002_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube002_3.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube003_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube003_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube003_3.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube003_4.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube004_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube004_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube004_3.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube005_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube005_2.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube006_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube006_2.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube006_3.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube007_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube007_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube007_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube007_4.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube008_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube008_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube008_3.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube009_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube009_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube009_3.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube009_4.geometry}
                    material={materials.White}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube010_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube010_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube010_3.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube011_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube011_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube012_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube012_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube012_3.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube013_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube013_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube013_3.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube013_4.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube014_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube014_2.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube014_3.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube015_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube015_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube015_3.geometry}
                    material={materials.Blue}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube015_4.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube016_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube016_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube016_3.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube017_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube017_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube018_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube018_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube018_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube019_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube019_2.geometry}
                    material={materials.Red}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube019_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube019_4.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube020_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube020_2.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube020_3.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube021_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube021_2.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube022_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube022_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube022_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube023_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube023_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube023_3.geometry}
                    material={materials.Green}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube023_4.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube024_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube024_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube024_3.geometry}
                    material={materials.Yellow}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube025_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube025_2.geometry}
                    material={materials.Orange}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube026_1.geometry}
                    material={materials.Black}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RubixsCube026_2.geometry}
                    material={materials.Yellow}
                />
            </group></>
    )
}
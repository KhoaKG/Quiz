import { Col, Row, Carousel, Collapse, Image, Tabs } from 'antd';
import CartItem from '../../components/CardItem';
import { useState } from "react"
import { Link } from "react-router-dom"
import { getListTopic } from "../../service/topicService"
import { useRef, useSate, Suspense, useEffect } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import "./home.css"
export function Model(props) {
    const group = React.useRef()
    const { scene, animations } = useGLTF('/CesiumMan.gltf')
    const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
    const { nodes, materials } = useGraph(clone)
    const { actions } = useAnimations(animations, group)
    useEffect(() => {
        if (actions) {
            actions[Object.keys(actions)[0]]?.play(); // Chạy animation đầu tiên
        }
    }, [actions]);
    return (
        <group ref={group} {...props} dispose={null} scale={2}>
            <group>
                <group name="Z_UP" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Armature" rotation={[0, 0, -Math.PI / 2]}>
                        <primitive object={nodes.Skeleton_torso_joint_1} />
                        <skinnedMesh name="Cesium_Man" geometry={nodes.Cesium_Man.geometry} material={materials['Cesium_Man-effect']} skeleton={nodes.Cesium_Man.skeleton} />
                    </group>
                </group>
            </group>
        </group>
    )
}
const { Panel } = Collapse
function Home() {
    const [topic, setTopic] = useState([])

    useEffect(() => {
        const fetchApi = async () => {
            const response = await getListTopic()
            setTopic(response);
        }
        fetchApi()
    }, [])
    const letters = ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'];
    return (
        <>
            {/* <div className='home'>
                <div className='inner-content'>
                    <h1 style={{ fontSize: 33, color: 'white' }}> COURSE </h1>
                </div>
                <div className='inner-box'>
                    <Row gutter={[30, 20]}>
                        {topic.map(item => (

                            <Col xxl={6} xl={6} lg={12} md={12} sm={24} xs={24} key={item.id}>
                                <CartItem title={item.name} link={'/quiz/' + item.id} />
                            </Col>

                        ))}
                    </Row>

                </div>
            </div> */}
            <div className='home'>
                <div className='home-content'>
                    <div className='inner-title no-select'>
                        Home Quiz
                    </div>
                    <div className='inner-threejs'>
                        <Canvas>
                            <Suspense fallback={null}>
                                <ambientLight />
                                <spotLight intensity={0.9} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                                <Model />
                                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
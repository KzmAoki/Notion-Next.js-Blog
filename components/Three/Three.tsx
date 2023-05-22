import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

interface Sizes {
    width: number;
    height: number;
} 

const Three: NextPage = () => {

    const canvasRef = useRef<HTMLElement | null>(null);

    useEffect(() => {

        if(canvasRef.current) return;
        canvasRef.current = document.getElementById('canvas');

        const scene = new THREE.Scene(); // シーンの取得

        const fontLoader = new FontLoader();
        fontLoader.load('/Fonts/Zen_Kaku_Gothic_New_Light_Regular.json',  (font) => {
            const textGeometry = new TextGeometry('Notion Blog', {
                font: font,
                size: .1,
                height: .05
            });
            textGeometry.center();

            const textMaterial = new THREE.MeshStandardMaterial({
                color: "#DCDCDC"
            });
            const text = new THREE.Mesh(textGeometry, textMaterial);

            text.position.z = -1;
            text.position.y = -0.1;

            scene.add(text);
        });

        if (typeof window === 'object') {
            const canvasParent = document.getElementById('canvasParent') as HTMLElement | null;

            const header = document.getElementById('header') as HTMLElement | null;

            const sizes: Sizes = { // サイズ
                width: canvasParent ? canvasParent.offsetWidth : 0,
                height: window.innerHeight - (header ? header.offsetHeight : 0)
            };

            const camera = new THREE.PerspectiveCamera( // カメラ
                90,
                sizes.width / sizes.height,
                0.1,
                1000
            );

            const renderer = new THREE.WebGLRenderer({ // レンダラー
                canvas: canvasRef.current || undefined,
                antialias: true,
                alpha: true
            });
            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(window.devicePixelRatio);
                        
            // const controls = new OrbitControls(camera, renderer.domElement);

            const icosahedronGeometry = new THREE.IcosahedronGeometry(1, 0); // ボックスジオメトリー
            const icosahedronMaterial = new THREE.MeshStandardMaterial({
                color: 0xffffff,
            });
            const icosahedron = new THREE.Mesh(icosahedronGeometry, icosahedronMaterial);
            icosahedron.position.z = -8;
            icosahedron.position.y = +1.5;
            icosahedron.rotation.set(10, 10, 10);
            scene.add(icosahedron);

            const tick = () => {
                icosahedron.rotation.x += 0.01;
                icosahedron.rotation.y += 0.01;
                // controls.update();
                renderer.render(scene, camera);
                window.requestAnimationFrame(tick);
            };
            tick();

            window.addEventListener('resize', () => { // ブラウザリサイズ処理
                sizes.width = canvasParent ? canvasParent.offsetWidth : 0;
                sizes.height = window.innerHeight - (header ? header.offsetHeight : 0);
                camera.aspect = sizes.width / sizes.height;
                camera.updateProjectionMatrix();
                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(window.devicePixelRatio)
            })
        }

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // ライト
        // scene.add(ambientLight);
        // const pointLight = new THREE.PointLight(0xffffff, 0.5);
        // pointLight.position.set(1, 2, 3);
        // scene.add(pointLight);
        const directionalLight1 = new THREE.DirectionalLight(0x5FFBF1);
        directionalLight1.intensity = 1.2;
        directionalLight1.position.set(1, 1, 2);
        scene.add(directionalLight1);
        const directionalLight2 = new THREE.DirectionalLight(0xD16BA5);
        directionalLight2.intensity = 1.2;
        directionalLight2.position.set(-1, -1, 2);
        scene.add(directionalLight2);


    }, []);

    return (
        <>
            <canvas id='canvas'></canvas>
        </>
    );
};

export default Three;
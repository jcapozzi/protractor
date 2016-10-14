"use strict";
function ctrl($scope, $timeout) {
    $scope.callCount = 0;
    $scope.clickButton = function () {
        $timeout(function () {
            $scope.callCount++;
        }, 1000);
    };
}
function myApp() {
    return {
        scope: {},
        templateUrl: './html/myApp.html',
        link: function ($scope, $element) {
            var scene, camera, renderer;
            var geometry, material, mesh;
            init();
            animate();
            function init() {
                scene = new THREE.Scene();
                camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
                camera.position.z = 1000;
                geometry = new THREE.BoxGeometry(200, 200, 200);
                material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
                mesh = new THREE.Mesh(geometry, material);
                scene.add(mesh);
                renderer = new THREE.WebGLRenderer();
                renderer.setSize(window.innerWidth, window.innerHeight);
                $element.append(renderer.domElement);
            }
            function animate() {
                requestAnimationFrame(animate);
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.02;
                renderer.render(scene, camera);
            }
        },
        controller: ctrl,
        controllerAs: 'ctrl'
    };
}
exports.myApp = myApp;
//# sourceMappingURL=myApp.js.map
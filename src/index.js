import Swiper from "./components/swiper/swiper";
import ScrollView from "./components/scroll-view/scroll-view";
const components = [
    Swiper,
    ScrollView
]
const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    });
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
module.exports = {
    v: '0.1',
    install,
    Swiper,
    ScrollView
};
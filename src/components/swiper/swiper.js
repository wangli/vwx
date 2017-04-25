import Swiper from 'swiper';
import _tpl from './swiper.html';
import 'swiper/dist/css/swiper.css';
let vSwiper = null;
export default {
	name: 'swiper',
	template: _tpl,
	props: {
		indicatorDots: {
			default: false
		},
		autoplay: {
			default: false
		},
		current: {
			default: 0
		},
		interval: {
			default: 300
		},
		duration: {
			default: 500
		},
		circular: {
			default: false
		},
		swiperId: {
			default: ".swiper"
		}
	},
	computed: {
		pagination: function () {
			return (this.indicatorDots) ? ".swiper-pagination" : "";
		},
		intval: function () {
			return (this.autoplay) ? this.interval : 0;
		}
	},
	mounted: function () {
		//创建滚动
		vSwiper = new Swiper(this.swiperId, {
			autoplay: this.intval,
			pagination: this.pagination,
			speed: this.duration,
			initialSlide: this.current,
			loop: this.circular,
		});
	},
	methods: {
		refresh: function () {
			mySwiper.update();
		}
	}
};

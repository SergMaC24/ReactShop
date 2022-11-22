import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Холодильники'},
            {id: 2, name: 'Смартфоны'},
            {id: 3, name: 'Nike'},
            {id: 4, name: 'Puma'},
        ]
        this._brands = [
            {id:1, name: 'Apple'},
            {id:2, name: 'Samsung'},
            {id:3, name: 'Lenovo'},
            {id:4, name: 'Asus'},
        ]
        this._devices = [
            {id: 1, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SY606_.jpg'},
            {id: 2, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SY606_.jpg'},
            {id: 3, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SY606_.jpg'},
            {id: 4, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SY606_.jpg'},
            {id: 5, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SL1500_.jpg'},
            {id: 6, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SL1500_.jpg'},
            {id: 7, name: 'Iphone 12 pro', price: 2500, rating: 5, img: 'https://m.media-amazon.com/images/I/611fy2og0QL._AC_SL1500_.jpg'},
        ]
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}
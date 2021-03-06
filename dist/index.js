/**
 * @author empty916
 * @email [empty916@qq.com]
 * @create date 2019-08-09 17:12:57
 * @modify date 2019-08-09 17:12:57
 * @desc [description]
 */
import MapCache from './MapCache';
import { default as inject } from "./inject";
import { useInject } from "./hooks";
export { default as createStore } from "./createStore";
export var setMapDepParser = MapCache.setMapDepParser;
export var resetMapDepParser = MapCache.resetMapDepParser;
export { inject, useInject };
export var setInjectStoreGetter = function setInjectStoreGetter(sg) {
  useInject.setStoreGetter(sg);
  inject.setStoreGetter(sg);
};
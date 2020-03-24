import storage from 'assets/js/storage';
import {SEARCH_HISTORY_KEYWORD_KEY} from 'pages/search/config';

export const searchMixin = {
  methods: {
    selectItem(keyword) {
      let keywords = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []);
      if (keywords.length !== 0) {
        keywords = keywords.filter(val => val !== keyword);
      }
      keywords.unshift(keyword);
      storage.set(SEARCH_HISTORY_KEYWORD_KEY, keywords);
      // location.href = `https://www.imooc.com/api/search/hot?q=${keyword}`;
    }
  }
};

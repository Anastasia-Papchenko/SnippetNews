  // Интерфейс для данных о новости
export interface IData_SnippetNews {
  ID: number               // идентификатор новости
  TI: string               // заголовок новости
  AB: string               // содержимое (аннотация)
  URL: string              // ссылка на новость
  DOM: string              // домен источника
  DP: string               // дата и время публикации в формате "YYYY-MM-DDTHH:mm:ss"
  LANG: string             // язык новости
  REACH: number            // охват новости
  KW: IData_TagItem[]      // массив ключевых слов
  AU: string[]             // авторы новости
  CNTR: string             // страна
  CNTR_CODE: string        // код страны
  SENT: string             // сентимент (например, "positive" | "negative" | "neutral")
  TRAFFIC: IData_TrafficItem[] // массив источников трафика
  FAV: string              // URL до favicon
  HIGHLIGHTS: string[]     // фрагменты текста с <kw>…</kw> для подсветки
}

// Тэг для сниппета
export interface IData_TagItem {
  /** название тега */
  value: string
  /** количество упоминаний */
  count: number
}

// Трафик для сниппета
export interface IData_TrafficItem {
  /** страна-источник трафика */
  value: string
  /** объём трафика для этой страны */
  count: number
}
  
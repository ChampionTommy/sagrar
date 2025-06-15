import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function NewsCardGrid() {
  return (
    <section id="anchor-news" className="news">
      <div className="container">
        <div className="headline">
          <div className="headline__item headline__item--flex">
            <h2>Новости</h2>
          </div>
          <div className="headline__item">
            <Button className="button" asChild>
              <Link href="/news">
                Смотреть все новости
              </Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="articles news__articles news__articles--structure-1">
            <Card className="article-card article-card--large">
              <a
                className="article-card__link"
                href="/news/get/pozdravlenie-rektora-vadima-zaharova-s-dnem-rossii-i-dnem-goroda"
              ></a>
              <CardContent>
              <Badge
                className="date article-card__date bg-white"

              >
                12 Июн, 09:00
              </Badge>
              <div className="article-card__preview">
                <img
                  className="article-card__img"
                  src="https://uust.ru/media/press-center/news/covers/2025/06/2025-06-12_09-00-05.webp"
                  alt="Поздравление ректора Вадима Захарова с Днем России и Днем города Уфы"
                />
              </div>
              <CardTitle className="article-card__title">
                Поздравление ректора Вадима Захарова с Днем России и Днем города
                Уфы
              </CardTitle>
              </CardContent>
            </Card>
            <article className="article-card article-card--bg-picture">
              <a
                className="article-card__link"
                href="/news/get/uchenye-uunit-proveli-ispytaniya-intellektualnoj-medicinskoj-sistemy"
              ></a>
              <time
                className="date article-card__date"
                dateTime="11 Июн, 12:56"
              >
                11 Июн, 12:56
              </time>

              <img
                className="article-card__bg-img"
                src="https://uust.ru/media/press-center/news/covers/2025/06/2025-06-11_12-56-03.webp"
                alt="Ученые УУНиТ провели испытания интеллектуальной медицинской системы"
              />

              <h3 className="article-card__title">
                Ученые УУНиТ провели испытания интеллектуальной медицинской
                системы
              </h3>
            </article>
            <article className="article-card article-card--text-blue">
              <a
                className="article-card__link"
                href="/news/get/student-birskogo-filiala-pobeditel-konkursa-imeni-ni-lobachevskogo"
              ></a>
              <time
                className="date article-card__date"
                dateTime="11 Июн, 12:40"
              >
                11 Июн, 12:40
              </time>
              <h3 className="article-card__title">
                Студент Бирского филиала – победитель конкурса имени Н.И.
                Лобачевского
              </h3>
              <span className="article-card__more">Подробнее</span>
            </article>
            <article className="article-card article-card--bg-picture">
              <a
                className="article-card__link"
                href="/news/get/studentka-uunit-vzyala-zoloto-olimpiady-ya-professional"
              ></a>
              <time
                className="date article-card__date"
                dateTime="11 Июн, 09:45"
              >
                11 Июн, 09:45
              </time>

              <img
                className="article-card__bg-img"
                src="https://uust.ru/media/press-center/news/covers/2025/06/2025-06-11_09-45-47.webp"
                alt='Студентка УУНиТ взяла золото олимпиады "Я - профессионал"'
              />

              <h3 className="article-card__title">
                Студентка УУНиТ взяла золото олимпиады, Я - профессионал
              </h3>
            </article>
            <article className="article-card article-card--text-blue">
              <a
                className="article-card__link"
                href="/news/get/pokoriteli-sopromata-pozdravili-studentov-uunit-diplomantov-olimpiad-po-soprotivleniyu-materialov"
              ></a>
              <time
                className="date article-card__date"
                dateTime="10 Июн, 16:51"
              >
                10 Июн, 16:51
              </time>
              <h3 className="article-card__title">
                Покорители сопромата: поздравили студентов УУНиТ - дипломантов
                олимпиад по сопротивлению материалов
              </h3>
              <span className="article-card__more">Подробнее</span>
            </article>
            <article className="article-card article-card--bg-picture">
              <a
                className="article-card__link"
                href="/news/get/na-podgotovitelnom-otdelenii-dlya-inostrannyh-grazhdan-ino-uunit-zavershilas-yazykovaya-praktika"
              ></a>
              <time
                className="date article-card__date"
                dateTime="10 Июн, 16:14"
              >
                10 Июн, 16:14
              </time>

              <img
                className="article-card__bg-img"
                src="https://uust.ru/media/press-center/news/covers/2025/06/2025-06-10_16-14-41.webp"
                alt="На Подготовительном отделении для иностранных граждан ИНО УУНиТ завершилась языковая практика."
              />

              <h3 className="article-card__title">
                На Подготовительном отделении для иностранных граждан ИНО УУНиТ
                завершилась языковая практика.
              </h3>
            </article>
            <article className="article-card article-card--text-blue">
              <a
                className="article-card__link"
                href="/news/get/uchitsya-v-uunit-o-lgotah-i-kvotah-pri-postuplenii"
              ></a>
              <time
                className="date article-card__date"
                dateTime="10 Июн, 15:35"
              >
                10 Июн, 15:35
              </time>
              <h3 className="article-card__title">
                Учиться в УУНиТ: о льготах и квотах при поступлении
              </h3>
              <span className="article-card__more">Подробнее</span>
            </article>
            <article className="article-card article-card--fon">
              <a
                className="article-card__link"
                href="/news/get/luchshie-sredi-pervyh-iimrt-nagradil-pervokursnikov-pobeditelej-intellektualnyh-sorevnovanij"
              ></a>
              <time
                className="date article-card__date"
                dateTime="10 Июн, 15:14"
              >
                10 Июн, 15:14
              </time>
              <div className="article-card__preview">
                <img
                  className="article-card__img"
                  src="https://uust.ru/media/press-center/news/covers/2025/06/2025-06-10_15-14-26.webp"
                  alt="Лучшие среди первых: ИИМРТ наградил первокурсников – победителей интеллектуальных соревнований"
                />
              </div>
              <h3 className="article-card__title">
                Лучшие среди первых: ИИМРТ наградил первокурсников – победителей
                интеллектуальных соревнований
              </h3>
            </article>
            <article className="article-card article-card--text-blue">
              <a
                className="article-card__link"
                href="https://may9.ru/"
                target="_blank"
                rel="noopener"
              ></a>
              <div className="article-card__image">
                <img
                  src="https://uust.ru/static/New_files_ugatu/images/80-age-logo-main.png"
                  alt="Фото"
                  loading="lazy"
                />
              </div>
              <h3 className="article-card__title">
                80-я годовщина Победы в Великой Отечественной войне 1941-1945
                годов
              </h3>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

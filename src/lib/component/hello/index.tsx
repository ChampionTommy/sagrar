export const Hello = () => {
  return (
    <section className="section bg-white pt-20 pb-28 self-center ">
      <div className="container">
        <div className="article article--indent flex flex-row">
          <div className="flex flex-col">
            <img
              className="words"
              src="https://uust.ru/static/New_files_ugatu/images/redesign/brandbook/words.webp"
              alt="Девиз УУНиТ: Изобретая лучшее будущее"
              title="Девиз УУНиТ: Изобретая лучшее будущее"
            />
            <p>
              <i>
                Мы верим, что только просвещенные, образованные, мотивированные
                и целеустремленные люди способны менять мир к лучшему.
                <br />
                <br />
                УУНиТ — это место, где создают лучшее будущее.
              </i>
            </p>
          </div>
          <img
            className="img-left"
            src="https://uust.ru/static/New_files_ugatu/images/redesign/brandbook/students_2024.png"
          />
        </div>
      </div>
    </section>
  );
};

import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Olá, eu sou{' '}
        <span className={s.purple}>Marcos André </span>
        de <span className={s.purple}> Tupã, São Paulo.</span>
        <br />
        Desenvolvedor{' '}
        <span className={s.purple}>Full Stack. </span>
        <br /> Bacharelo em{' '}
        <span className={s.purple}>Sistemas de Informação </span> 
      </p>

      <p
        style={{
          color: 'rgb(155 126 172)',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        "Esforce-se para construir coisas que façam a diferença!"{' '}
      </p>
    </div>
  );
};

export default AboutTextCard;

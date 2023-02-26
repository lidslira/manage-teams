import * as S from './styles';

type Props = {
  title: string;
  subtitle: string;
}

export function Highlight(props: Props){
  return(
    <S.Container>
      <S.Title>
        {props.title}
      </S.Title>

      <S.Subtitle>
        {props.subtitle}
      </S.Subtitle>
    </S.Container>
  );
}
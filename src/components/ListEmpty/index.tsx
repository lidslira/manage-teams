import * as S from './styles';

type Props = {
  message: string;
}
export function ListEmpty(props: Props){
  return(
    <S.Container>
      <S.Message>
        {props.message}
      </S.Message>
    </S.Container>
  );
}
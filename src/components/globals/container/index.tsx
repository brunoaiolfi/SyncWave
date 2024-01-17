import { usePlayer } from '../../../hooks/usePlayer'
import { MusicPlayer } from '../../music/player'
import * as Styled from './styles'

interface ContainerProps {
    children: React.ReactNode
}

export function Container({ children }: ContainerProps) {

    const { musicPlaing } = usePlayer()

    return (
        <>
            <Styled.Container>
                {children}
            </Styled.Container>

            {
                musicPlaing &&
                <MusicPlayer
                    music={musicPlaing}
                />
            }
        </>
    )
}
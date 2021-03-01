import { useAuth } from "providers/AuthProvider";
import { useRef, useState } from "react";
import styled from "styled-components";
import BounceButton from "./BounceButton";
import { animated } from "react-spring";
import { useShake } from "commons/SharedAnim";
import LoadingAnim from "views/LoadingAnim";

function InvitationCode({reference, style, ...rest}) {
    const [animStyle, triggerShaking] = useShake(i=>`translate3d(${i*2}ch, 0, 0)`);
    reference.current = { triggerShaking };

    return (
        <Input type = 'password'
        placeholder = 'INVITATION CODE'
        style = {{ ...animStyle, ...style }}
        {...rest}
        />
    );
}

export default function LoginPanel1() {
	const auth = useAuth();
    const inputRef = useRef();
    const [password, setPassword] = useState('');
    const [isError, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

	const onClick = async ()=>{
        if(isLoading) 
            return;

        setLoading(true);
        const isSuccess = await auth.login('stephen@invited.com', password);
        setLoading(false);

        if(!isSuccess) {
            setError(true);
            inputRef.current.triggerShaking();
        } 
	};

    const onChange = (e)=> {
        setPassword(e.target.value);
        setError(false);
    };

	return (
        <>
            <InvitationCode reference={inputRef} value={password} onChange={onChange} />
            <Button onClick={onClick}> LOGIN </Button>
            { !isLoading && isError && <ErrorMsg>{'Invalid invitation code!'}</ErrorMsg> }
            { isLoading && <LoadingAnim/> }
        </>
	)
}


//======================= style ==========================
const ErrorMsg = styled.p `
    color: #bb005e;
`;


const Input = styled(animated.input) `
    height: 6ch;
	width: 30ch;
    margin: 1.5ch;
    color: #2c2c4e;
    background-color: white;
    border-radius: 4ch;
    border: none;
    text-align: center;

    :focus{
        outline: none;
    }
`;

//#53c6b1
const Button = styled(BounceButton) `
    height: 6ch;
	width: 30ch;
    margin: 1.5ch;
    color: white;
    background-color: #53c6b1;
    border-radius: 4ch;
`;

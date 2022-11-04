import Image from "next/image";
import appPreviewImagem from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import iconCheckImage from '../assets/icon-check.svg';

export default function Home() {
    return (
        <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
            <main>
                <Image src={logoImg} alt="Nlw Copa"/>
                <h1 id="h1Titulo" className="mt-14 text-5xl font-bold leading-tight">
                    Crie seu próprio bolão da copa e compartilhe entre amigos!
                </h1>
                <div className="mt-10 flex items-center gap-2">
                    <Image src={usersAvatarExampleImg} alt=""/>
                    <strong className="text-gray-100 text-xl">
                        <span className="text-ignite-500">+12.592</span> pessoas já estão usando
                    </strong>
                </div>
                <form className="mt-10 flex gap-2">
                    <input
                        className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm"
                        type="text"
                        required
                        placeholder="Qual nome do seu bolão?"
                    />
                    <button
                        className="bg-yellowNlw-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellowNlw-700"
                        type="submit"
                    >
                        Criar meu bolão
                    </button>
                </form>
                <p>Após criar seu bolão, você receberá um código único que poderar usar para convidar outras
                    pessoas </p>
                <div>
                    <div>
                        <Image src={iconCheckImage} alt=""/>
                        <div>
                            <span>+2.034</span>
                            <span>Bolões criados</span>
                        </div>
                    </div>
                    <div>
                        <Image src={iconCheckImage} alt=""/>
                        <div>
                            <span>+2.034</span>
                            <span>Palpites enviados</span>
                        </div>
                    </div>
                </div>
            </main>
            <Image
                src={appPreviewImagem}
                alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa"
                quality={100}
            />
        </div>
    )
}

// export const getServerSideProps = async () => {
//     const response = await fetch('http://localhost:3333/pools/count');
//     const data = await response.json();
//
//     console.log(data);
//
//     return {
//         props:{
//             count: data.count,
//         }
//     }
// }






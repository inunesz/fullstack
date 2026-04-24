import json


DATA_FILE = 'videos.json'


def carr_videos():
    try:
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []


def save_videos(videos):
    with open(DATA_FILE, 'w') as file:
        json.dump(videos, file, indent=4)


def exb_videos(videos):
    if not videos:
        print("Nenhum vídeo encontrado.")
        return
    for video in videos:
        print(f"Titulo: {video['titulo']}")
        print(f"Gênero: {video['genero']}")
        print(f"Ano: {video['ano']}")
        print(f"Avaliação: {video['avaliaçao']}")
        print(f"Descrição: {video['descriçao']}")
        print(f"URL do video: {video['url']}\n")


def add_video():
    titulo = input("Digite o título do vídeo: ")
    genero = input("Digite o gênero do vídeo: ")
    ano = int(input("Digite o ano do vídeo: "))
    avaliacao = float(input("Digite a avaliação do vídeo (0 a 10): "))
    descricao = input("Digite uma descrição do vídeo: ")
    url = input("Digite a URL do vídeo: ")

    video = {
        'titulo': titulo,
        'genero': genero,
        'ano': ano,
        'avaliacao': avaliacao,
        'descricao': descricao,
        'url': url
    }

    videos = carr_videos()
    videos.append(video)
    save_videos(videos)
    print("Vídeo adicionado com sucesso!\n")

def main():
    while True:
        print("1. Exibir vídeos")
        print("2. Adicionar vídeo")
        print("3. Sair")
        choice = input("Escolha uma opção: ")

        if choice == '1':
            videos = carr_videos()
            exb_videos(videos)
        elif choice == '2':
            add_video()
        elif choice == '3':
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida, tente novamente.\n")

if __name__ == "__main__":
    main()

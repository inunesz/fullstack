import json

# o arquivo vai ser armazenado em .json
DATA_FILE = 'videos.json'

# carregamento do arquivo
def load_videos():
    try:
        with open(DATA_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

# onde vai salvar o arquivo
def save_videos(videos):
    with open(DATA_FILE, 'w') as file:
        json.dump(videos, file, indent=4)

# exibiçao do proprio arquivo
def display_videos(videos):
    if not videos:
        print("Nenhum vídeo encontrado.")
        return
    for video in videos:
        print(f"Titulo: {video['titulo']}")
        print(f"Gênero: {video['genero']}")
        print(f"Ano: {video['ano']}")
        print(f"Avaliação: {video['avaliaçao']}")
        print(f"Descrição: {video['descriçao']}")
        print(f"URL da Imagem: {video['imagem_url']}\n")

# add um video para o arquivo
def add_video():
    titulo = input("Digite o título do vídeo: ")
    genero = input("Digite o gênero do vídeo: ")
    ano = int(input("Digite o ano do vídeo: "))
    avaliaçao = float(input("Digite a avaliação do vídeo (0 a 10): "))
    descriçao = input("Digite uma descrição do vídeo: ")
    imagem_url = input("Digite a URL da imagem do vídeo: ")

    video = {
        'titulo': titulo,
        'genero': genero,
        'ano': ano,
        'avaliaçao': avaliaçao,
        'descriçao': descriçao,
        'imagem_url': imagem_url
    }

    videos = load_videos()
    videos.append(video)
    save_videos(videos)
    print("Vídeo adicionado com sucesso!\n")

# escolhas para o arquivo como a de exibir video ou sair
def main():
    while True:
        print("1. Exibir vídeos")
        print("2. Adicionar vídeo")
        print("3. Sair")
        choice = input("Escolha uma opção: ")

        if choice == '1':
            videos = load_videos()
            display_videos(videos)
        elif choice == '2':
            add_video()
        elif choice == '3':
            print("Saindo do programa.")
            break
        else:
            print("Opção inválida, tente novamente.\n")

if __name__ == "__main__":
    main()

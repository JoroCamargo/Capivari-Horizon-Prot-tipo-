# Capivari Horizon — Protótipo 3D para navegador

## O que existe nesta versão

- Mundo 3D procedural em Three.js.
- Estrutura preparada para PC e mobile.
- Verificação de WebGL 2.
- 20 veículos selecionáveis, cada um com HP, velocidade máxima, aceleração, aderência e arrasto.
- Corrida com 8 carros, checkpoints, ranking e modo passeio livre.
- Câmera chase.
- HUD com velocidade, posição, bairro aproximado e minimapa.
- Controles por WASD/setas e controles touch.
- Bairros inspirados em áreas citadas por fontes públicas de Capivari.
- Malha viária procedural baseada em eixos urbanos, pronta para ser substituída por geometria OSM/GeoJSON real.

## Importante sobre o mapa

Este pacote NÃO afirma reproduzir a cidade de Capivari em escala cadastral 1:1. A malha incluída é uma representação procedural para prototipagem. Para uma versão comercial/final, a etapa correta é importar dados geoespaciais licenciados (por exemplo, OpenStreetMap/GeoJSON) e converter a malha viária, edificações e terreno para coordenadas do motor.

## Rodando

É necessário servir a pasta por HTTP por causa do fetch de `data/capivari.json`.

Com Python:

    python -m http.server 8080

Depois abra:

    http://localhost:8080

Ou use qualquer servidor estático.

## Arquitetura recomendada para a versão 2

frontend:
- Three.js
- Web Workers para streaming/LOD
- GLTF/GLB para veículos e prédios
- física dedicada (Rapier ou Cannon)
- instancing para árvores/luminárias

dados:
- GeoJSON/OSM para ruas
- DEM/terreno quando disponível
- catálogo de prédios/POIs
- tabelas de veículos e eventos

backend opcional:
- Node.js/Express ou Fastify
- PostgreSQL/PostGIS
- autenticação
- ranking
- salvamento
- telemetria

## OpenAI API

A IA pode entrar depois como camada opcional:
- narrador/engenheiro de corrida
- geração de eventos
- assistente de tuning
- criação de desafios
- NPCs conversacionais

A chave da OpenAI NUNCA deve ser colocada no JavaScript público do navegador. Use um backend/proxy seguro.

## Próxima etapa para fidelidade geográfica

1. Obter a malha de ruas de Capivari por fonte geográfica licenciada.
2. Filtrar a área urbana.
3. Extrudar vias, calçadas e lotes.
4. Fazer LOD por distância.
5. Associar cada segmento a bairro.
6. Criar rotas por bairro.
7. Modelar pontos de interesse.
8. Fazer bake de iluminação/texturas.
9. Adicionar física de colisão.
10. Fazer testes em Android intermediário, iPhone e desktop.

## Testes

O código foi estruturado para evitar dependências locais complexas, mas uma resposta de texto não permite afirmar que ele foi executado em 1000 combinações de navegador/dispositivo. Antes de publicar, faça testes reais em Chrome/Edge/Firefox/Safari e Android/iOS.

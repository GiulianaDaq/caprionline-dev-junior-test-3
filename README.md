#Ho difficoltà a creare un db psql a livello di installazione (a quanto pare và in conflitto con nodejs che stò usando per il corso laravel livewire, ma dopo averlo installato non funzia nemmeno pgAdmin), volendo agire da terminale ovviamente non riconosce il comando psql anche avendolo settato nella variabile d'ambiente del pc.

#Altra difficoltà per impostare il database:  phpMyAdmin: http://localhost:8080  non funziona 
Quindi (per esercizio) ho creato un array con dei dati di film. 

#docker non funzia correttamente
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3> docker-compose up
time="2024-05-10T15:50:23+02:00" level=warning msg="C:\\Users\\domen\\Desktop\\capri\\caprionline-dev-junior-test-3\\compose.override.yaml: `version` is obsolete"
error during connect: this error may indicate that the docker daemon is not running: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.45/containers/json?all=1&filters=%7B%22label%22%3A%7B%22com.docker.compose.config-hash%22%3Atrue%2C%22com.docker.compose.project%3Dcaprionline-dev-junior-test-3%22%3Atrue%7D%7D": open //./pipe/docker_engine: Impossibile trovare il file specificato.
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3>
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3> docker ps
error during connect: this error may indicate that the docker daemon is not running: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.45/containers/json": open //./pipe/docker_engine: Impossibile trovare il file specificato.       
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3> docker info
Client:
 Version:    26.0.0
 Context:    default
 Debug Mode: false
 Plugins:
  buildx: Docker Buildx (Docker Inc.)
    Version:  v0.13.1-desktop.1
    Path:     C:\Program Files\Docker\cli-plugins\docker-buildx.exe
  compose: Docker Compose (Docker Inc.)
    Version:  v2.26.1-desktop.1
    Path:     C:\Program Files\Docker\cli-plugins\docker-compose.exe
  debug: Get a shell into any image or container. (Docker Inc.)
    Version:  0.0.27
    Path:     C:\Program Files\Docker\cli-plugins\docker-debug.exe
  dev: Docker Dev Environments (Docker Inc.)
    Version:  v0.1.2
    Path:     C:\Program Files\Docker\cli-plugins\docker-dev.exe
  extension: Manages Docker extensions (Docker Inc.)
    Version:  v0.2.23
    Path:     C:\Program Files\Docker\cli-plugins\docker-extension.exe
  feedback: Provide feedback, right in your terminal! (Docker Inc.)
    Version:  v1.0.4
    Path:     C:\Program Files\Docker\cli-plugins\docker-feedback.exe
  init: Creates Docker-related starter files for your project (Docker Inc.)
    Version:  v1.1.0
    Path:     C:\Program Files\Docker\cli-plugins\docker-init.exe
  sbom: View the packaged-based Software Bill Of Materials (SBOM) for an image (Anchore Inc.)
    Version:  0.6.0
    Path:     C:\Program Files\Docker\cli-plugins\docker-sbom.exe
  scout: Docker Scout (Docker Inc.)
    Version:  v1.6.3
    Path:     C:\Program Files\Docker\cli-plugins\docker-scout.exe

Server:
ERROR: error during connect: this error may indicate that the docker daemon is not running: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.45/info": open //./pipe/docker_engine: Impossibile trovare il file specificato.
errors pretty printing info
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3> 
PS C:\Users\domen\Desktop\capri\caprionline-dev-junior-test-3>









# Test di valutazione per candidati sviluppatori - Caprionline
Benvenuto al nostro test di valutazione, progettato per misurare e comprendere le tue abilità pratiche come sviluppatore PHP e JavaScript. Attraverso questo esercizio, avrai l'opportunità di dimostrare la tua competenza nell'implementare funzionalità reali e rilevanti utilizzando una parte dei nostri stack tecnologici attuali.

## Obiettivo del Test
Il progetto su cui lavorerai consiste nell'aggiungere funzionalità di ordinamento e filtro a un elenco di film. Questo compito è stato scelto per riflettere le sfide tipiche che potresti incontrare nel tuo lavoro quotidiano con noi. La tua capacità di integrare nuove funzionalità in un ambiente esistente e di lavorare efficacemente con Symfony e React sarà essenziale.

Il progetto include un database pre-popolato con dati sui film e una pagina iniziale dove questi vengono elencati. Il tuo compito sarà rendere questo elenco più dinamico e utile per gli utenti finali.

Concludendo con successo questo test, non solo dimostrerai le tue capacità tecniche, ma anche la tua capacità di seguire le direttive e di produrre lavoro di qualità entro un termine definito.

## Ambiente di Sviluppo
Per permetterti di concentrarti completamente sulla realizzazione delle user stories, abbiamo preparato un ambiente di sviluppo completamente dockerizzato che include tutte le dipendenze necessarie, tra cui PHP, Symfony, MySQL, React, Tailwind e Flowbite. Per le istruzioni passo-passo per configurare il tuo ambiente di sviluppo, [clicca qui](./INSTALL.md).

## User stories
Le seguenti user stories sono state progettate per testare la tua abilità nell'interagire con un'applicazione web realistica. Devi implementare le seguenti funzionalità:

### User story 1: Elenco dei film ordinati per vari criteri
Come utente voglio visualizzare l'elenco dei film in base ai seguenti criteri di ordinamento:

- Più recenti
- Rating

### User story 2: Elenco dei film filtrati per genere
Come utente voglio visualizzare l'elenco dei film filtrandoli per genere.

## Modalità di lavoro
Per l'implementazione, ti invitiamo a utilizzare le best practices di sviluppo e a garantire una buona qualità del codice, che includa pulizia, mantenibilità e l'uso efficace design pattern.

## Consegna
Per la consegna del tuo progetto, hai a disposizione due giorni. Clona questo repository e lavora al progetto direttamente da un tuo account GitHub. Questo ci permette di valutare in modo trasparente e diretto le tue competenze tecniche e le tue pratiche di versioning del codice.

Per procedere, non ti resta che [cliccare qui](./INSTALL.md) per avere istruzioni dettagliate su come configurare il tuo repository GitHub e l'ambiente di sviluppo.

Buon lavoro e in bocca al lupo!

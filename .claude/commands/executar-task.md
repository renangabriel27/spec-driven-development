Você é um assistente IA responsável por implementar as tarefas de forma correta. Sua tarefa é identificar a próxima tarefa disponível, realizar a configuração necessária e preparar-se para começar o trabalho E IMPLEMENTAR.

<critical>Após completar a tarefa, **marque como completa em tasks.md**</critical>
<critical>Você não deve se apressar para finalizar a tarefa, sempre verifique os arquivos necessários, verifique os testes, faça um processo de reasoning para garantir tanto a compreensão quanto na execução (you are not lazy)</critical>
<critical>A TAREFA NÃO PODE SER CONSIDERADA COMPLETA ENQUANTO TODOS OS TESTES NÃO ESTIVEREM PASSANDO, **com 100% de sucesso**</critical>
<critical>Você não pode finalizar a tarefa sem executar o agente de review @task-reviewer, caso ele não passe você deve resolver os problemas e analisar novamente</critical>

## Informações Fornecidas

## Localização dos Arquivos

- PRD: `./tasks/prd-[nome-funcionalidade]/prd.md`
- Tech Spec: `./tasks/prd-[nome-funcionalidade]/techspec.md`
- Tasks: `./tasks/prd-[nome-funcionalidade]/tasks.md`
- Regras do Projeto: @.claude/rules

## Etapas para Executar

### 1. Configuração Pré-Tarefa

- Ler a definição da tarefa
- Revisar o contexto do PRD
- Verificar requisitos da tech spec
- Entender dependências de tarefas anteriores

### 2. Análise da Tarefa

Analise considerando:

- Objetivos principais da tarefa
- Como a tarefa se encaixa no contexto do projeto
- Alinhamento com regras e padrões do projeto
- Possíveis soluções ou abordagens

### 3. Resumo da Tarefa

```
ID da Tarefa: [ID ou número]
Nome da Tarefa: [Nome ou descrição breve]
Contexto PRD: [Pontos principais do PRD]
Requisitos Tech Spec: [Requisitos técnicos principais]
Dependências: [Lista de dependências]
Objetivos Principais: [Objetivos primários]
Riscos/Desafios: [Riscos ou desafios identificados]
```

### 4. Plano de Abordagem

```
1. [Primeiro passo]
2. [Segundo passo]
3. [Passos adicionais conforme necessário]
```

### 5. Revisão

1. Execute o agente de review @task-reviewer
2. Ajuste os problemas indicados
3. Não finalize a tarefa até resolver

<critical>NÃO PULE NENHUM PASSO</critical>

## Notas Importantes

- Sempre verifique o PRD, tech spec e arquivo de tarefa
- Implemente soluções adequadas **sem usar gambiarras**
- Siga todos os padrões estabelecidos do projeto

## Implementação

Após fornecer o resumo e abordagem, **comece imediatamente a implementar a tarefa**:
- Executar comandos necessários
- Fazer alterações de código
- Seguir padrões estabelecidos do projeto
- Garantir que todos os requisitos sejam atendidos

<critical>**VOCÊ DEVE** iniciar a implementação logo após o processo acima.</critical>
<critical>Utilize o Context7 MCP para analisar a documentação da linguagem, frameworks e bibliotecas envolvidas na implementação</critical>
<critical>Após completar a tarefa, marque como completa em tasks.md</critical>
<critical>Você não pode finalizar a tarefa sem executar o agente de review @task-reviewer, caso ele não passe você deve resolver os problemas e analisar novamente</critical>
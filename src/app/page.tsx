"use client";
// import { HStack, Heading, Stack, Table, Button, Input} from "@chakra-ui/react"
import styled from 'styled-components';
import {  Heading, Stack, Table } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
// import {
//   PaginationItems,
//   PaginationNextTrigger,
//   PaginationPrevTrigger,
//   PaginationRoot,
// } from "@/components/ui/pagination"

const AddTaskButton = styled.button`
  width: 100%;
  max-width: 150px;
  background-color: #3498db;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #2980b9;
  }
`;

export default function Home() {
  return (
    <Stack
      width="full"
      height="100vh"           // Define a altura da tela completa para centralização vertical
      justifyContent="top"   // Centraliza verticalmente
      alignItems="center"       // Centraliza horizontalmente
      padding="4"               // Padding opcional para dar um espaço nas bordas
      gap="5"
    >

    <Stack gap="5">
      <Field alignItems="center">
      <AddTaskButton> + Add Tarefa</AddTaskButton>
      </Field>
      <Heading
      size="xl">Lista de Tarefas
      </Heading>
      <Table.Root size="sm" maxWidth="600px" interactive>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader>Tarefas</Table.ColumnHeader>
            <Table.ColumnHeader>Responsável</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Prioridade</Table.ColumnHeader>
            <Table.ColumnHeader>Dt. Pedido </Table.ColumnHeader>
            <Table.ColumnHeader>Status</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Dt. Previsão</Table.ColumnHeader>
            <Table.ColumnHeader textAlign="end">Dt. Finalização</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>{item.task}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell textAlign="end">{item.priority}</Table.Cell>
              <Table.Cell>{item.date}</Table.Cell>
              <Table.Cell>{item.status}</Table.Cell>
              <Table.Cell textAlign="end">{item.dt_previsao}</Table.Cell>
              <Table.Cell textAlign="end">{item.dt_finalizacao}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
      </Stack>

      {/* <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot> */}
    </Stack>
  )
}

const items = [
  { id: 1,task:1, name: "Joe", priority: "Alta",date:"10/10/2024", status: "Vigente",dt_previsao:"10/10/2024", dt_finalizacao: "10/01/2025" },
  { id: 2,task:2, name: "Alan", priority: "Média",date:"10/10/2024", status: "Vigente",dt_previsao:"10/10/2024", dt_finalizacao: "10/01/2025" },
  { id: 3,task:3, name: "Brad", priority: "Alta", date:"10/10/2024",status: "Vigente",dt_previsao:"10/10/2024", dt_finalizacao: "10/01/2025" },
  { id: 4,task:4, name: "Ana", priority: "Alta", date:"10/10/2024",status: "Vigente",dt_previsao:"10/10/2024", dt_finalizacao: "10/01/2025" },
  { id: 5,task:5, name: "Maria", priority: "Alta", date:"10/10/2024",status: "Vigente",dt_previsao:"10/10/2024", dt_finalizacao: "10/01/2025" },
]

"use client";

import { HStack, Heading, Stack, Table, Button } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination"

export default function Home() {
  return (
    <Stack width="full" gap="5">
      <Heading
      size="xl">WorkList
      <Button> + Adicionar Tarefa</Button>
      </Heading>
      <Table.Root size="sm" variant="outline" striped>
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

      <PaginationRoot count={items.length * 5} pageSize={5} page={1}>
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
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

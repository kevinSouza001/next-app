"use client";
// import { HStack, Heading, Stack, Table, Button, Input} from "@chakra-ui/react"
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heading,
  Stack,
  Table,
  Button,
  Box,
  Input,
  Flex,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";

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
  const [open, setOpen] = useState(false);
  return (
    <Stack
      width="full"
      height="100vh"
      justifyContent="top"
      alignItems="center"
      padding="4"
      gap="5"
    >
      <DialogRoot lazyMount open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DialogTrigger asChild>
          <AddTaskButton> + Add tarefa</AddTaskButton>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Criar tarefa</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Flex gap="4" wrap="wrap" justify="space-between">
              <Box pos="relative" w="full" maxW="200px">
                <Field>Responsável</Field>
                <Input className="peer" placeholder="" />
              </Box>
              <Box pos="relative" w="full" maxW="200px">
                <Field>Status</Field>
                <Input className="peer" placeholder="" />
              </Box>
              <Box pos="relative" w="full" maxW="200px">
                <Field>Data do pedido</Field>
                <Input className="peer" type="date" />
              </Box>
              <Box pos="relative" w="full" maxW="200px">
                <Field>Previsão de entrega</Field>
                <Input className="peer" type="date" />
              </Box>
              <Box pos="relative" w="full">
                <Field>Descrição</Field>
                <Input className="peer" placeholder="" height="200px" />
              </Box>
              </Flex>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild>
              <AddTaskButton>Cancel</AddTaskButton>
            </DialogActionTrigger>
            <Button>Save</Button>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>

      <Stack gap="5">
        <Field alignItems="center"></Field>
        <Heading size="xl">Lista de Tarefas</Heading>
        <Table.Root size="sm" maxWidth="600px" interactive>
          <Table.Header>
            <Table.Row>
            <Table.ColumnHeader w="6">
              <Checkbox
                
              />
            </Table.ColumnHeader>
              <Table.ColumnHeader>Tarefas</Table.ColumnHeader>
              <Table.ColumnHeader>Responsável</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Prioridade
              </Table.ColumnHeader>
              <Table.ColumnHeader>Dt. Pedido </Table.ColumnHeader>
              <Table.ColumnHeader>Status</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Dt. Previsão
              </Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">
                Dt. Finalização
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell><Checkbox/></Table.Cell> 
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
    </Stack>
  );
}

const items = [
  {
    id: 1,
    task: 1,
    name: "Joe",
    priority: "Alta",
    date: "10/10/2024",
    status: "Vigente",
    dt_previsao: "10/10/2024",
    dt_finalizacao: "10/01/2025",
  },
  {
    id: 2,
    task: 2,
    name: "Alan",
    priority: "Média",
    date: "10/10/2024",
    status: "Vigente",
    dt_previsao: "10/10/2024",
    dt_finalizacao: "10/01/2025",
  },
  {
    id: 3,
    task: 3,
    name: "Brad",
    priority: "Alta",
    date: "10/10/2024",
    status: "Vigente",
    dt_previsao: "10/10/2024",
    dt_finalizacao: "10/01/2025",
  },
  {
    id: 4,
    task: 4,
    name: "Ana",
    priority: "Alta",
    date: "10/10/2024",
    status: "Vigente",
    dt_previsao: "10/10/2024",
    dt_finalizacao: "10/01/2025",
  },
  {
    id: 5,
    task: 5,
    name: "Maria",
    priority: "Alta",
    date: "10/10/2024",
    status: "Vigente",
    dt_previsao: "10/10/2024",
    dt_finalizacao: "10/01/2025",
  },
];

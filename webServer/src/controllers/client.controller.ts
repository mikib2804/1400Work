import express, { Request, Response } from "express";
import { ClientModel } from "../models/Client";
import { ObjectId } from "mongoose";

export const getClients = async (req: Request, res: Response) => {
  try {
    const clients = await ClientModel.find({});

    if (!clients.length) {
      return res.status(200).json({ message: "Not found any clients" });
    }

    res.status(200).json(clients);
  } catch (err) {
    console.error(err);
  }
};

export const createClient = async (req: Request, res: Response) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "Missing required parameters" });
  }

  try {
    const newClient = new ClientModel({
      fullname,
      email,
      password,
    });

    await newClient.save();

    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updateClient = async (req: Request, res: Response) => {
  console.log("hERE");

  const clientID = req.params.id;
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "Missing required parameters" });
  }

  try {
    const updatedClientData = {
      fullname,
      email,
      password,
    };

    const updatedClient = await ClientModel.findByIdAndUpdate(
      clientID,
      updatedClientData
    );

    res.status(201).json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteClient = (req: Request, res: Response) => {
  const clientID = req.params.id;

  try {
    ClientModel.findByIdAndDelete(clientID).then((data: any) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${clientID}`,
        });
      } else {
        res.status(200).json({
          message: "Client was deleted successfully!",
        });
      }
    });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

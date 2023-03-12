import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcrypt";

const INSERT_USER =
    `INSERT INTO user(id,fullname,email,username,password,birth_date)
                 VALUES (UUID_TO_BIN(?),?,?,?,?,?)`;

const UPDATE_USER =
    `UPDATE user set fullname=?,username=?,birth_date=?
            WHERE BIN_TO_UUID(id)=?`;

const SELECT_USER_BY_ID =
    `SELECT BIN_TO_UUID(id) as id,fullname,username,email,DATE_FORMAT(birth_date,'%Y-%m-%d') as birth_date
            FROM user
            WHERE id=UUID_TO_BIN(?)`;

const SELECT_USER_BY_EMAIL =
    `SELECT BIN_TO_UUID(id) as id,fullname,username,email,password,DATE_FORMAT(birth_date,'%Y-%m-%d') as birth_date
            FROM user
            WHERE email=?`;

export async function retrieveUserById(id) {
    try {
        const [rows] = await getPool().execute(SELECT_USER_BY_ID, [id]);
        return rows[0];
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving user by id: ' + id,
            err);
    }
}

export async function retrieveUserByEmail(email) {
    try {
        const [rows] = await getPool().execute(SELECT_USER_BY_EMAIL, [email]);
        return rows[0];
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving user by email: ' + email,
            err);
    }
}

export async function createUser(user) {
    if (await retrieveUserByEmail(user.email)) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'User email already exists: ' + user.email,
            null);
    }
    try {
        user.id = uuidv4();
        bcrypt.hash(user.password, 10, async function(err, hash) {
            await getPool().execute(INSERT_USER,
                [
                    user.id,
                    user.fullname,
                    user.email,
                    user.username,
                    hash,
                    user.birth_date
                ]);
            });
        console.log("Created user with email" + user.email);
        return user;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating user: ' + user.email,
            err);
    }
}

export async function updateUser(user) {
    try {
        await getPool().execute(UPDATE_USER,
            [
                user.fullname,
                user.username,
                user.birth_date,
                user.id,
            ]);
        console.log("Updated user");
        return user;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error updating user: ' + user.id,
            err);
    }
}


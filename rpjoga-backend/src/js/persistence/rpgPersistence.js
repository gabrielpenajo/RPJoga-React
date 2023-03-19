import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';
import { retrieveUserByEmail } from './userPersistence.js';
const INSERT_RPG =
    `INSERT INTO rpg(id,title,description,theme_list,user_id,creation_date,image_url)
                 VALUES (UUID_TO_BIN(?),?,?,?,UUID_TO_BIN(?),?,?)`;

const UPDATE_RPG =
    `UPDATE rpg set title=?, description=?, theme_list=?, creation_date=?, image_url=?
            WHERE BIN_TO_UUID(id)=?`;

const SELECT_ALL_RPGS =
    `SELECT BIN_TO_UUID(id) as id,title,description,theme_list,DATE_FORMAT(creation_date,'%Y-%m-%d') as creation_date, image_url
            FROM rpg`;

const SELECT_RPG_BY_ID =
    `SELECT BIN_TO_UUID(id) as id,title,description,theme_list,DATE_FORMAT(creation_date,'%Y-%m-%d') as creation_date
            FROM rpg
            WHERE id=UUID_TO_BIN(?)`;

const SELECT_RPGS_BY_USER_ID =
    `SELECT BIN_TO_UUID(id) as id,title,description,theme_list,DATE_FORMAT(creation_date,'%Y-%m-%d') as creation_date
            FROM rpg
            WHERE user_id=UUID_TO_BIN(?)`;

const SELECT_RPGS_AND_USERS =
    `SELECT BIN_TO_UUID(rpg.id) as rpg_id, user.fullname as user_name, rpg.title, rpg.description, DATE_FORMAT(rpg.creation_date,'%Y-%m-%d') as creation_date
                FROM rpg
                INNER JOIN user
                ON rpg.user_id = user.id
                ORDER BY user_name ASC;`

export async function createRpg(rpg) {
    try {
        await getPool().execute(INSERT_RPG,
            [
                uuidv4(),
                rpg.title,
                rpg.description,
                rpg.theme_list,
                rpg.user_id,
                rpg.creation_date,
                rpg.image_url
            ]);
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating rpg for user: ' + rpg.user_id,
            err);
    }
}

export async function updateRpg(rpg) {
    try {
        await getPool().execute(UPDATE_RPG,
            [
                rpg.title,
                rpg.description,
                rpg.theme_list,
                rpg.creation_date,
                rpg.image_url,
                rpg.id
            ]);
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error updating rpg: ' + rpg.id,
            err);
    }
}

export async function retrieveRpgsByUserEmail(user_email) {
    try {
        const user = await retrieveUserByEmail(user_email);
        const [rows] = await getPool().execute(SELECT_RPGS_BY_USER_ID, [user.id]);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving rpg for user: ' + user_email,
            err);
    }
}

export async function retrieveRpgById(id) {
    try {
        const [rows] = await getPool().execute(SELECT_RPG_BY_ID, [id]);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving rpg by id:' + id,
            err);
    }
}

export async function retrieveAllRpgs() {
    try {
        const [rows] = await getPool().execute(SELECT_ALL_RPGS);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving rpgs',
            err);
    }
}

export async function retrieveRpgsAndUsers() {
    try {
        const [rows] = await getPool().execute(SELECT_RPGS_AND_USERS);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving rpgs and users',
            err);
    }
}
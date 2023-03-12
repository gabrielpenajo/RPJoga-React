import { getPool } from './database.js';
import { CustomError, CustomErrorType } from '../utils/utils.js';
import { v4 as uuidv4 } from 'uuid';

const INSERT_RPG =
    `INSERT INTO rpg(id,title,description,theme_list,user_id,creation_date)
                 VALUES (UUID_TO_BIN(?),?,?,UUID_TO_BIN(?),?)`;

const UPDATE_RPG =
    `UPDATE rpg set title=?, description=?, theme_list=?, creation_date=?
            WHERE BIN_TO_UUID(id)=?`;

const SELECT_RPGS_BY_USER_ID =
    `SELECT BIN_TO_UUID(id) as id,title,description,theme_list,DATE_FORMAT(rpg_date,'%Y-%m-%d') as creation_date
            FROM rpg
            WHERE user_id=UUID_TO_BIN(?)`;

const SELECT_RPGS_AND_USERS =
    `SELECT BIN_TO_UUID(rpg.id) as rpg_id, user.fullname as user_name, rpg.title, rpg.description, DATE_FORMAT(rpg.rpg_date,'%Y-%m-%d') as creation_date
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
                rpg.creation_date
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
                rpg.id
            ]);
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error updating rpg: ' + rpg.id,
            err);
    }
}

export async function retrieveRpgsByUserId(user_id) {
    try {
        const [rows] = await getPool().execute(SELECT_RPGS_BY_USER_ID, [user_id]);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error retrieving rpg by user id: ' + user_id,
            err);
    }
}

export async function retrieveRpgsAndUsers() {
    try {
        const [rows] = await getPool().execute(SELECT_RPGS_AND_USERS);
        return rows;
    } catch (err) {
        throw new CustomError(CustomErrorType.DatabaseError,
            'Error creating rpg: ' + rpg.id,
            err);
    }
}
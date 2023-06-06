const PIECES = {
    EMPTY: 0,
    PAWN: 1,
    KNIGHT: 2,
    BISHOP: 3,
    ROOK: 4,
    QUEEN: 5,
    KING: 6
  };
  
  // Constants for representing the chess colors
  const COLORS = {
    WHITE: 0,
    BLACK: 1
  };
  
  // Chessboard class to represent the game board
  class Chessboard {
    constructor() {
      this.board = this.setupBoard();
      this.currentPlayer = COLORS.WHITE;
      this.checkmate = false;
      this.stalemate = false;
      this.check = false;
    } 
  
    // Initializes the chessboard with pieces in their starting positions
    setupBoard() {
      // Create an 8x8 board filled with empty squares
      const board = new Array(8);
      for (let i = 0; i < 8; i++) {
        board[i] = new Array(8).fill(PIECES.EMPTY);
      }
  
      // Set up white pieces
      const PIECES = {
        EMPTY: 0,
        PAWN: 1,
        KNIGHT: 2,
        BISHOP: 3,
        ROOK: 4,
        QUEEN: 5,
        KING: 6
      };
      
      // Constants for representing the chess colors
      const COLORS = {
        WHITE: 0,
        BLACK: 1
      };
      
      // Chessboard class to represent the game board
      class Chessboard {
        constructor() {
          this.board = this.setupBoard();
          this.currentPlayer = COLORS.WHITE;
          this.checkmate = false;
          this.stalemate = false;
          this.check = false;
        }
      
        // Initializes the chessboard with pieces in their starting positions
        setupBoard() {
          // Create an 8x8 board filled with empty squares
          const board = new Array(8);
          for (let i = 0; i < 8; i++) {
            board[i] = new Array(8).fill(PIECES.EMPTY);
          }
      
          // Set up white pieces
          board[0][0] = PIECES.ROOK;
          board[0][1] = PIECES.KNIGHT;
          board[0][2] = PIECES.BISHOP;
          board[0][3] = PIECES.QUEEN;
          board[0][4] = PIECES.KING;
          board[0][5] = PIECES.BISHOP;
          board[0][6] = PIECES.KNIGHT;
          board[0][7] = PIECES.ROOK;
          for (let i = 0; i < 8; i++) {
            board[1][i] = PIECES.PAWN;
          }
      
          // Set up black pieces
          board[7][0] = PIECES.ROOK;
          board[7][1] = PIECES.KNIGHT;
          board[7][2] = PIECES.BISHOP;
          board[7][3] = PIECES.QUEEN;
          board[7][4] = PIECES.KING;
          board[7][5] = PIECES.BISHOP;
          board[7][6] = PIECES.KNIGHT;
          board[7][7] = PIECES.ROOK;
          for (let i = 0; i < 8; i++) {
            board[6][i] = PIECES.PAWN;
          }
      
          return board;
        }
      
        // Moves a chess piece from the source square to the destination square
        movePiece(sourceRow, sourceCol, destRow, destCol) {
          const piece = this.board[sourceRow][sourceCol];
          this.board[sourceRow][sourceCol] = PIECES.EMPTY;
          this.board[destRow][destCol] = piece;
        }
      
        // Validates a move based on the rules of chess
        isValidMove(sourceRow, sourceCol, destRow, destCol) {
          const piece = this.board[sourceRow][sourceCol];
          const destPiece = this.board[destRow][destCol];
      
          // Ensure source square is not empty and contains the current player's piece
          if (piece === PIECES.EMPTY || getColor(piece) !== this.currentPlayer) {
            return false;
          }
      
          // Check for piece-specific movement rules
          switch (piece) {
            case PIECES
  
      // Set up black pieces
      board[7][0] = PIECES.ROOK;
      board[7][1] = PIECES.KNIGHT;
      board[7][2] = PIECES.BISHOP;
      board[7][3] = PIECES.QUEEN;
      board[7][4] = PIECES.KING;
      board[7][5] = PIECES.BISHOP;
      board[7][6] = PIECES.KNIGHT;
      board[7][7] = PIECES.ROOK;
      for (let i = 0; i < 8; i++) {
        board[6][i] = PIECES.PAWN;
      }
  
      return board;
    }
  
    // Moves a chess piece from the source square to the destination square
    movePiece(sourceRow, sourceCol, destRow, destCol) {
      const piece = this.board[sourceRow][sourceCol];
      this.board[sourceRow][sourceCol] = PIECES.EMPTY;
      this.board[destRow][destCol] = piece;
    }
  
    // Validates a move based on the rules of chess
    isValidMove(sourceRow, sourceCol, destRow, destCol) {
      const piece = this.board[sourceRow][sourceCol];
      const destPiece = this.board[destRow][destCol];
    
  
      // Ensure source square is not empty and contains the current player's piece
      if (piece === PIECES.EMPTY || getColor(piece) !== this.currentPlayer) {
        return false;
      }
  
      // Check for piece-specific movement rules
      switch (piece) {
        case PIECES
      }